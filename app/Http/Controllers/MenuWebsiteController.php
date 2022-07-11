<?php

namespace App\Http\Controllers;

use App\Http\Requests\MenuWebsiteRequest;
use App\Models\MenuWebsite;
use App\Http\Requests\StoreMenuWebsiteRequest;
use App\Http\Requests\UpdateMenuWebsiteRequest;
use App\Http\Resources\MenuWebsiteResource;
use Inertia\Inertia;

class MenuWebsiteController extends Controller
{
    protected $title = 'Menu Website';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $menuWebsite = MenuWebsite::latest()->get();
        $menuweb = MenuWebsiteResource::collection(MenuWebsite::latest()->paginate(10));
        return inertia('Menuweb/Index', [
            'title' => $this->title,
            'menuweb' => $menuweb,
        ]);
        // return Inertia::render('Menuweb/Index', ['menuweb' => $menuweb]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreMenuWebsiteRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MenuWebsiteRequest $request)
    {
        $attr = $request->toArray();
        MenuWebsite::create($attr);
        return back()->with([
            'type' => 'success',
            'message' => $this->title . ' created successfully',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MenuWebsite  $menuWebsite
     * @return \Illuminate\Http\Response
     */
    public function show(MenuWebsite $menuWebsite)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MenuWebsite  $menuWebsite
     * @return \Illuminate\Http\Response
     */
    public function edit(MenuWebsite $menuWebsite)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMenuWebsiteRequest  $request
     * @param  \App\Models\MenuWebsite  $menuWebsite
     * @return \Illuminate\Http\Response
     */
    public function update(MenuWebsiteRequest $request, MenuWebsite $menuWebsite)
    {
        $attr = $request->toArray();
        $menuWebsite->update($attr);
        return back()->with([
            'type' => 'success',
            'message' => $this->title . ' updated successfully',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MenuWebsite  $menuWebsite
     * @return \Illuminate\Http\Response
     */
    public function destroy(MenuWebsite $menuWebsite)
    {
        $menuWebsite->delete();
        return back()->with([
            'type' => 'success',
            'message' => $this->title . ' deleted successfully'
        ]);
    }
}