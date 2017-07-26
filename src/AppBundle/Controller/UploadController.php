<?php
namespace AppBundle\Controller;

use AppBundle\Entity\Upload;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class UploadController extends Controller
{
    /**
     * @param Request $req
     * @return Response
     */
    public function uploadAction(Request $req)
    {
        $file     = $req->files->get("file");
        $fileOrig = $file->getClientOriginalName();
        $fileDate = date("Y/m");
        $fileDir  = sprintf("%s/%s", $this->getParameter('headzoo_upload_path'), $fileDate);
        $fileName = sprintf("%s.%s", md5(uniqid()), $file->guessExtension());
        $fileURL  = sprintf("%s/%s/%s", $this->getParameter("headzoo_upload_url"), $fileDate, $fileName);
        $file->move($fileDir, $fileName);

        $upload = new Upload();
        $upload->setOrigFileName($fileOrig);
        $upload->setURL($fileURL);
        $em = $this->get("doctrine.orm.default_entity_manager");
        $em->persist($upload);
        $em->flush();

        return $this->jsonResponse([
            "url"  => $fileURL,
            "name" => $fileOrig
        ]);
    }
}
